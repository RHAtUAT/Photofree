import { Menu, MenuItem, useAuthenticator } from "@aws-amplify/ui-react";
import "./App.css";

const { signOut } = useAuthenticator(context => [context.signOut]);

export function UserCard(): JSX.Element {
    return (
        <Menu>
          <MenuItem>View Profile</MenuItem>
          <MenuItem>Info</MenuItem>
          <MenuItem onClick={signOut}>Sign Out</MenuItem>
        </Menu>
    );
  }