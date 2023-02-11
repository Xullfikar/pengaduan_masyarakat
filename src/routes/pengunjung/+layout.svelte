<script lang="ts">
  // @ts-nocheck
  import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Button,
  } from "sveltestrap";

  let isOpen = false;

  function handleUpdate(event) {
    isOpen = event.detail.isOpen;
  }
</script>

<Navbar color="primary" dark expand="md">
  <NavbarBrand href="/">Pengaduan Masyarakat</NavbarBrand>
  <NavbarToggler on:click={() => (isOpen = !isOpen)} />
  <Collapse {isOpen} navbar expand="md" on:update={handleUpdate}>
    <Nav class="ms-auto" navbar>
      <NavItem>
        <NavLink href="/register">Register</NavLink>
      </NavItem>
      <NavItem>
        <Button color="dark" href="/login">Login</Button>
      </NavItem>
    </Nav>
  </Collapse>
</Navbar>
<div class="container">
  <slot />
</div>
