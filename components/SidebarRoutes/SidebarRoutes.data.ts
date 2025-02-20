import{
    BarChart4,
    Building2,
    PanelsTopLeft,
    Settings,
    ShieldCheck,
    CircleHelpIcon,
    Calendar
} from 'lucide-react' 

export const sideBarRoutesdata = [
    {
        nombre:"Panel de control",
        icon: PanelsTopLeft,
        href: "/"

    },{
        nombre: "Empresas",
        icon: Building2,
        href: "/"

    },{
        nombre: "Calenadario",
        icon: Calendar,
        href: "/"

    }
]

export const dataToolsSidebar= [
    {
        nombre: "Ayuda",
        icon: CircleHelpIcon,
        href: "/"

    },{
        nombre: "Datos",
        icon: BarChart4,
        href: "/"

    }
]

export const dataSupportSideBar= [
    {
        nombre: "Configuracion",
        icon: Settings,
        href: "/"

    },{
        nombre: "Seguridad",
        icon: ShieldCheck,
        href: "/"

    }
]