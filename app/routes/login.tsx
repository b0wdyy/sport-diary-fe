import { MetaFunction } from '@remix-run/react'

import { StravaButton } from '~/components/buttons/strava-button'

import logo from '../images/sport_diary.jpg'

export const meta: MetaFunction = () => {
    return [{ title: 'Sports Diary | Login' }]
}

export default function Login() {
    return (
        <div className="grid h-screen w-screen grid-cols-2 overflow-hidden">
            <div className="flex flex-col items-center justify-center bg-white text-gray-800">
                <div>
                    <p className="mb-8 text-5xl font-black uppercase">
                        Hey there!
                    </p>
                    <p>
                        Welcome back to{' '}
                        <span className="font-bold text-primary">
                            Sport Diary
                        </span>
                        . Let&apos;s crush those fitness goals together.{' '}
                    </p>
                    <p>
                        <span className="font-bold text-primary">Log in </span>
                        to track your progress!
                    </p>
                </div>
                <img src={logo} alt="Logo" className="w-80" />
            </div>

            <div className="grid place-items-center">
                <StravaButton />
            </div>
        </div>
    )
}
