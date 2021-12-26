import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import defaultAvatar from './avatar.jpeg';

import Button from '@mui/material/Button';
import LogoutIcon from '@mui/icons-material/Logout';
import Stack from '@mui/material/Stack';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);
  const avatar = defaultAvatar;

  return (
    <Stack spacing={2} direction="row" alignItems="center">
      <img src={avatar} alt="" width="32" height="32" />
      <span>{name}</span>
      <Button
        variant="contained"
        type="button"
        endIcon={<LogoutIcon />}
        onClick={() => dispatch(authOperations.logOut())}
      >
        Logout
      </Button>
    </Stack>
  );
}
