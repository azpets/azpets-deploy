import Main from 'components/Main'
import { getDisplayName } from 'next/dist/next-server/lib/utils'

export default function Home() {
    return (
        <div
            style={{
                'background-color': '#fff',
                width: '100%',
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <img
                src="/img/logo-hg.svg"
                alt="AZPets"
                style={{ maxWidth: '250px' }}
            />
        </div>
    )
}
