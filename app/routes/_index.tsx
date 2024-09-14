import type { MetaFunction } from '@remix-run/node'

export const meta: MetaFunction = () => {
    return [
        { title: 'Sports Diary' },
        {
            name: 'description',
            content:
                'Application to track your sport activities. This application can be integrated with Strava.',
        },
    ]
}

export default function Index() {
    function handleRedirectToStrava() {
        window.location.href =
            'http://localhost:8080/api/oauth2/authorization/strava'
    }

    return (
        <div>
            <button onClick={handleRedirectToStrava}>Log in</button>
        </div>
    )
}
