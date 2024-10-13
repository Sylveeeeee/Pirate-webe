// server/api/user.js
import { createRouter } from 'h3';
import { getUserById, updateUserField } from '../controllers/userController';
import authenticateJWT from '../middleware/authMiddleware'; // Import the middleware

const router = createRouter();

// GET user data
router.get('/', authenticateJWT, async (event) => {
  const userId = event.node.req.user ? event.node.req.user.id : null; // Check if user exists
  if (!userId) {
    return { status: 200, body: { message: 'No user logged in' } }; // Allow access even if not logged in
  }

  try {
    const user = await getUserById(userId);
    if (!user) {
      return { status: 404, body: { message: 'User not found' } };
    }
    return { body: user };
  } catch (error) {
    console.error('Error fetching user data:', error);
    return { status: 500, body: { message: 'Internal server error' } };
  }
});

// PATCH user data
router.patch('/:field', authenticateJWT, async (event) => {
  const { field } = event.node.req.params;
  const { value } = await readBody(event); // Read the body from the event

  try {
    if (!event.node.req.user) {
      return { status: 403, body: { message: 'Forbidden. No user logged in.' } }; // Prevent unauthorized access
    }
    const updatedUser = await updateUserField(event.node.req.user.id, field, value);
    return { body: updatedUser };
  } catch (error) {
    console.error(`Error updating ${field}:`, error);
    return { status: 500, body: { message: 'Internal server error' } };
  }
});

export default router;
