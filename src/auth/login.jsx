import * as React from 'react';
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';
import axios from 'axios';
import { NavLink, useHistory } from 'react-router-dom';

function ModeToggle() {
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = React.useState(false);

  // necessary for server-side rendering
  // because mode is undefined on the server
  React.useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }

  return (
    <Button
      variant="outlined"
      onClick={() => {
        setMode(mode === 'light' ? 'dark' : 'light');
      }}
    >
      {mode === 'light' ? 'Turn dark' : 'Turn light'}
    </Button>
  );
}

export default function App() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const history = useHistory();

  // React.useEffect(() => {
  //   if (localStorage.getItem('user-info')) {
  //     history.push('/')
  //   }
  // })

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3300/login', {
        email,
        password,
      });
      console.log(response.data); // Handle the response from the server
    } catch (error) {
      console.error(error);
    }
  };

  // async function login() {
  //   console.warn(email, password);
  //   let item = { email, password };
  //   let result = await fetch('http://localhost:3300/login', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Accept: 'application/json',
  //     },
  //     body: JSON.stringify(item),
  //   });
  //   result = await result.json();
  //   localStorage.setItem('user-info', JSON.stringify(result));
  //   history.push('/');
  // }

  return (
    <>
      <CssVarsProvider>
        <main>
          <ModeToggle />
          <Sheet
            sx={{
              width: 300,
              mx: 'auto', // margin left & right
              my: 4, // margin top & bottom
              py: 3, // padding top & bottom
              px: 2, // padding left & right
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              borderRadius: 'sm',
              boxShadow: 'md',
            }}
            variant="outlined"
          >
            <div>
              <Typography level="h4" component="h1">
                <b>Welcome!</b>
              </Typography>
              <Typography level="body2">Sign in to continue.</Typography>
            </div>
            <FormControl onSubmit={handleSubmit}>
              <FormLabel>Email</FormLabel>
              <Input
                // html input attribute
                name="email"
                id="email"
                type="email"
                value={email}
                placeholder="johndoe@email.com"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <FormLabel>Password</FormLabel>
              <Input
                // html input attribute
                name="password"
                type="password"
                id="password"
                value={password}
                placeholder="password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
              <NavLink to='/'>
                {' '}
                <Button /* onClick={login} */ sx={{ mt: 1 }}>Log in</Button>
              </NavLink>
            </FormControl>
            <Typography
              endDecorator={<Link href="/sign-up">Sign up</Link>}
              fontSize="sm"
              sx={{ alignSelf: 'center' }}
            >
              Don&apos;t have an account?
            </Typography>
          </Sheet>
        </main>
      </CssVarsProvider>
    </>
  );
}
