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
  MdList ,MdMarkAsUnread
} from "react-icons/md";


// Admin Imports
import MainDashboard from "views/admin/default";
import NFTMarketplace from "views/admin/marketplace";
import Profile from "views/admin/profile";
import DataTables from "views/admin/dataTables";
import User from "views/admin/users";
import Reassureur from  "views/admin/listeReassureur";
import CompteBancaire from  "views/admin/compteBancaireAstree";
import CompteBancaireReas from "views/admin/compteBancaireReas";
// Gestionnaire Imports
import GMainDashboard from "views/gestionnaire/default";
import GProfile from "views/gestionnaire/profile";
import GDemandeTransfer from "views/gestionnaire/DemandeTransfer";
import GConeventionnel from "views/gestionnaire/Conventionnel";
import GLettreEtFiche from "views/gestionnaire/lettreetfiche";
import GAvis from "views/gestionnaire/avisdedebit";
import GFac from "views/gestionnaire/Facultative";
import GLobby from "views/gestionnaire/Chat";
// Auth Imports
import SignInCentered from "views/auth/signIn";
// Financier
import GOrdreValide from "views/financier/ordreVirement";
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
    icon: <Icon as={MdPerson} width='20px' height='20px' color='inherit' />,
    path: "/reassureur",
    component: Reassureur,
  },
  {
    name: "Compte Bancaire",
    layout: "/admin",
    icon: <Icon as={MdPerson} width='20px' height='20px' color='inherit' />,
    path: "/comptebancaire",
    component: CompteBancaire,
  },
  {
    name: "Compte Bancaire Reassureur",
    layout: "/admin",
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    path: "/bancairereassureur",
    component: CompteBancaireReas,
  },
  /*{
    name: "Data Tables",
    layout: "/admin",
    icon: <Icon as={MdBarChart} width='20px' height='20px' color='inherit' />,
    path: "/data-tables",
    component: DataTables,
  },*/
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
    component:Reassureur,
  },
  {
    name: "Compte Bancaire ",
    layout: "/gestionnaire",
    icon: <Icon as={MdBarChart } width='20px' height='20px' color='inherit' />,
    path: "/bancaires",
    component:CompteBancaire,
  },
 
  {
    name: "Demande Transfert",
    layout: "/gestionnaire",
    icon: <Icon as={MdPerson} width='20px' height='20px' color='inherit' />,
    path: "/demandes",
    component: GDemandeTransfer,
  },
  {
    name: "Demande Conventionnel",
    layout: "/gestionnaire",
    icon: <Icon as={MdInsertDriveFile} width='20px' height='20px' color='inherit' />,
    path: "/conventionnel",
    component: GConeventionnel,
  },
  {
    name: "Demande Faculative",
    layout: "/gestionnaire",
    icon: <Icon as={MdList } width='20px' height='20px' color='inherit' />,
    path: "/facultative",
    component:GFac,
  },
  {
    name: "Lettre et Fiche",
    layout: "/gestionnaire",
    icon: <Icon as={MdInsertDriveFile } width='20px' height='20px' color='inherit' />,
    path: "/fiches",
    component: GLettreEtFiche,
  },
/*  {
    name: "Avis de Debit",
    layout: "/gestionnaire",
    icon: <Icon as={MdPerson} width='20px' height='20px' color='inherit' />,
    path: "/avis",
    component: GAvis,
  },*/
  {
    name: "Profile",
    layout: "/gestionnaire",
    path: "/profile",
    icon: <Icon as={MdPerson} width='20px' height='20px' color='inherit' />,
    component: Profile,
  },
    /*
  {
    name: "Paramétrage",
    layout: "/gestionnaire",
    icon: <Icon as={MdSettings } width='20px' height='20px' color='inherit' />,
    path: "/parametres",
    component: Reassureur,
  },

     */
  /*{
    name: "Chat",
    layout: "/gestionnaire",
    icon: <Icon as={MdMarkAsUnread } width='20px' height='20px' color='inherit' />,
    path: "/chat",
    component: GLobby,
  },*/
  //financier
  {
    name: "Valider ordre virement",
    layout: "/financier",
    icon: <Icon as={MdPerson} width='20px' height='20px' color='inherit' />,
    path: "/valider",
    component: GOrdreValide,
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
