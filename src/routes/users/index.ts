import express from 'express';
import { userService } from '../../services/users';

const router = express.Router();

router.get('/', (_req, res) => {
  const data = userService.getUsersWithoutGenderInfo();
  res.send(data);
});

router.get('/:id', (req, res) => {
  const id = +req.params.id;
  const user = userService.getUserById(id);

  user != null
    ? res.send(user)
    : res.status(404).send('User not found');
});

router.post('/', (_req, res) => {
  res.send('Was created a new user');
});

export default router;
