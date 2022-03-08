import { MainLayout } from "../../components/layouts/MainLayout";

export default function Pricing() {
    return (
        <>
            <h1>PRICING</h1>
        </>
    )
}

Pricing.getLayout = function getLayout(page) {
    return (
        <MainLayout>
            {page}
        </MainLayout>
    )
}