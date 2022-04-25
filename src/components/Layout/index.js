import { AppShell, Navbar } from '@mantine/core';
import { Outlet } from 'react-router-dom';
import Mainlinks from './MainLinks';

const Layout = () => {
  return (
    <>
      <AppShell
        padding='md'
        navbar={
          <Navbar height={600} p='xs' width={{ base: 300 }}>
            <Navbar.Section>{<div>Vacine-se Cuiabá</div>}</Navbar.Section>
            <Navbar.Section grow mt='xs'>
              {<Mainlinks />}
            </Navbar.Section>
          </Navbar>
        }>
        <Outlet />
      </AppShell>
    </>
  );
};

export default Layout;
