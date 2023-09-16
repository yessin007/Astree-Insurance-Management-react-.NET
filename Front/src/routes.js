import React from "react";

import { Icon } from "@chakra-ui/react";
import {
  MdBarChart,
  MdPerson,
  MdHome,
  MdLock,
  MdOutlineShoppingCart,
  MdOutlineLogout,
  MdSettings ,
  MdInsertDriveFile ,
  MdList 
} from "react-icons/md";


// Admin Imports
import MainDashboard from "views/admin/default";
import NFTMarketplace from "views/admin/marketplace";
import Profile from "views/admin/profile";
import DataTables from "views/admin/dataTables";
import User from "views/admin/users";
import CompteBancaire from "views/admin/compteBancaire";
import ADemandeTransfer from "views/admin/DemandeTransfer";
import ADemandeTransferF from "views/admin/DemandeTransferF";

import AListeReassureur from "views/admin/listeReassureur";
import ALettreEtFiche from "views/admin/lettreetfiche";

// Gestionnaire Imports
import GMainDashboard from "views/gestionnaire/default";
import GProfile from "views/gestionnaire/profile";
import GDemandeTransfer from "views/gestionnaire/DemandeTransfer";
import GListeReassureur from "views/gestionnaire/listeReassureur";
import GLettreEtFiche from "views/gestionnaire/lettreetfiche";
import GAvis from "views/gestionnaire/avisdedebit";
// Auth Imports
import SignInCentered from "views/auth/signIn";

const routes = [
  
 //admin route
  {
    name: "Dashboard",
    layout: "/admin",
    path: "/default",
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: MainDashboard,
  },
 
  {
    name: "Users",
    layout: "/admin",
    icon: <Icon as={MdPerson} width='20px' height='20px' color='inherit' />,
    path: "/users",
    component: User,
  },
  
  {
    name: "Listes Réassureur",
    layout: "/admin",
    icon: <Icon as={MdList } width='20px' height='20px' color='inherit' />,
    path: "/reassureur",
    component:AListeReassureur,
  },
  {
    name: "Compte Bancaire",
    layout: "/admin",
    icon: <Icon as={MdBarChart } width='20px' height='20px' color='inherit' />,
    path: "/bancaires",
    component:CompteBancaire,
  },
 
  // {
  //   name: "Transfert Conventionnel",
  //   layout: "/admin",
  //   icon: <Icon as={MdList} width='20px' height='20px' color='inherit' />,
  //   path: "/conventionnel",
  //   component: ADemandeTransferC,
  // },
  {
    name: "Deamande transfert",
    layout: "/admin",
    icon: <Icon as={MdList} width='20px' height='20px' color='inherit' />,
    path: "/demandes",
    component: ADemandeTransfer,
  },

  // {
  //   name: "Transfert Facultative",
  //   layout: "/admin",
  //   icon: <Icon as={MdList} width='20px' height='20px' color='inherit' />,
  //   path: "/demandesF",
  //   component: ADemandeTransferF,
  // },

  {
    name: "Lettre et Fiche",
    layout: "/admin",
    icon: <Icon as={MdInsertDriveFile } width='20px' height='20px' color='inherit' />,
    path: "/fiches",
    component: ALettreEtFiche,
  },
  // {
  //   name: "Réassureur",
  //   layout: "/admin",
  //   icon: <Icon as={MdPerson} width='20px' height='20px' color='inherit' />,
  //   path: "/reassureur",
  //   component: User,
  // },
  // {
  //   name: "Data Tables",
  //   layout: "/admin",
  //   icon: <Icon as={MdBarChart} width='20px' height='20px' color='inherit' />,
  //   path: "/data-tables",
  //   component: DataTables,
  // },
  {
    name: "Profile",
    layout: "/admin",
    path: "/profile",
    icon: <Icon as={MdPerson} width='20px' height='20px' color='inherit' />,
    component: Profile,
  },

  // gestionnaire route
  {
    name: "Dashboard",
    layout: "/gestionnaire",
    path: "/default",
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: GMainDashboard,
  },
 
  {
    name: "Listes Réassureur",
    layout: "/gestionnaire",
    icon: <Icon as={MdList } width='20px' height='20px' color='inherit' />,
    path: "/reassureur",
    component:GListeReassureur,
  },
 
  {
    name: "Demande Transfert",
    layout: "/gestionnaire",
    icon: <Icon as={MdPerson} width='20px' height='20px' color='inherit' />,
    path: "/demandes",
    component: GDemandeTransfer,
  },
  {
    name: "Lettre et Fiche",
    layout: "/gestionnaire",
    icon: <Icon as={MdInsertDriveFile } width='20px' height='20px' color='inherit' />,
    path: "/fiches",
    component: GLettreEtFiche,
  },
  {
    name: "Avis de Debit",
    layout: "/gestionnaire",
    icon: <Icon as={MdPerson} width='20px' height='20px' color='inherit' />,
    path: "/avis",
    component: GAvis,
  },
  {
    name: "Paramétrage",
    layout: "/gestionnaire",
    icon: <Icon as={MdSettings } width='20px' height='20px' color='inherit' />,
    path: "/parametres",
    component: GListeReassureur,
  },
  {
    name: "Demande Transfert",
    layout: "/financier",
    icon: <Icon as={MdList} width='20px' height='20px' color='inherit' />,
    path: "/demandes",
    component: ADemandeTransferF,
  },
  // {
  //   name: "Data Tables",
  //   layout: "/gestionnaire",
  //   icon: <Icon as={MdBarChart} width='20px' height='20px' color='inherit' />,
  //   path: "/data-tables",
  //   component: DataTables,
  // },
  // {
  //   name: "Profile",
  //   layout: "/gestionnaire",
  //   path: "/profile",
  //   icon: <Icon as={MdPerson} width='20px' height='20px' color='inherit' />,
  //   component: Profile,
  // },
/***** */
  {
    name: "Logout",
    layout: "/auth",
    path: "/sign-in",
    icon: <Icon as={ MdOutlineLogout} width='20px' height='20px' color='inherit' />,
    component: SignInCentered,
  },
  
];

export default routes;
