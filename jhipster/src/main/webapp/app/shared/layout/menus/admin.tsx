import React from 'react';
import MenuItem from 'app/shared/layout/menus/menu-item';
import { DropdownItem } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavDropdown } from './menu-components';

const adminMenuItems = () => (
  <>
    <MenuItem icon="users" to="/admin/user-management">
      Gestione utenti
    </MenuItem>
    <MenuItem icon="tachometer-alt" to="/admin/metrics">
      Metriche
    </MenuItem>
    <MenuItem icon="heart" to="/admin/health">
      Integrità
    </MenuItem>
    <MenuItem icon="cogs" to="/admin/configuration">
      Configurazione
    </MenuItem>
    <MenuItem icon="tasks" to="/admin/logs">
      Log
    </MenuItem>
    {/* jhipster-needle-add-element-to-admin-menu - JHipster will add entities to the admin menu here */}
  </>
);

const openAPIItem = () => (
  <MenuItem icon="book" to="/admin/docs">
    API
  </MenuItem>
);

export const AdminMenu = ({ showOpenAPI }) => (
  <NavDropdown icon="users-cog" name="Amministratore" id="admin-menu" data-cy="adminMenu">
    {adminMenuItems()}
    {showOpenAPI && openAPIItem()}
  </NavDropdown>
);

export default AdminMenu;
