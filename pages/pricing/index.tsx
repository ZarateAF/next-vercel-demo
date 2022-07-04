import Link from "next/link"
import { MainLayout } from "../../components/layouts/MainLayout"

const PricingPage = () => {
    return (
        <MainLayout>
            <h1>PRICING</h1>
            <h1 className="title">
                Go to <Link href="/">Home!</Link>
            </h1>

            <p className="description">
                Get started by editing{' '}
                <code className="code">pages/pricing</code>
            </p>
        </MainLayout>
    )
}

export default PricingPage