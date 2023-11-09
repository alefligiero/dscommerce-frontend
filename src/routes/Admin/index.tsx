import { Outlet } from "react-router-dom";
import HeaderClient from "../../components/HeaderAdmin";

export default function Admin() {
    return (
        <>
            <HeaderClient />
            <Outlet />
        </>
    );
}