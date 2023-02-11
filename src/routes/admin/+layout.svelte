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
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Button
  } from "sveltestrap";

  let isOpen = false;

  function handleUpdate(event) {
    isOpen = event.detail.isOpen;
  }

  import type { LayoutData } from "./$types";
  export let data: LayoutData;
</script>

  <Navbar color="primary" dark expand="md">
    <NavbarBrand href="/">Pengaduan Masyarakat</NavbarBrand>
    <NavbarToggler on:click={() => (isOpen = !isOpen)} />
    <Collapse {isOpen} navbar expand="md" on:update={handleUpdate}>
      <Nav class="ms-auto" navbar>
        {#if !data.user}
          
        <NavItem>
          <NavLink href="/register">Register</NavLink>
        </NavItem>
        <NavItem>
          <Button color="dark" href="/login">Login</Button>
        </NavItem>
        {:else}
        <NavItem>
          <NavLink href="/">Dashboard</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/">User</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/">Pengaduan</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/">Report</NavLink>
        </NavItem>
        <Dropdown nav inNavbar>
          <DropdownToggle nav caret>Nama Pengguna</DropdownToggle>
          <form method="POST" action="/logout">
            <DropdownMenu end>
              <DropdownItem>Nama</DropdownItem>
              <DropdownItem>NIK</DropdownItem>
              <DropdownItem>NoTelp</DropdownItem>
              <DropdownItem divider />
              <DropdownItem type="submit"
                >Logout</DropdownItem
              >
            </DropdownMenu>
          </form>
        </Dropdown>
        {/if}
      </Nav>
    </Collapse>
  </Navbar>
<slot />
