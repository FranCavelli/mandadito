'use client'
import {signIn, useSession} from 'next-auth/react';

export default function Login() {

    const {data: session} = useSession();
    console.log(session);

    return (
        <div className="w-screen h-screen flex items-center justify-center bg-slate-100 p-3 relative">
            <div className="w-full h-2/3 bg-white relative rounded-2xl p-3">
                <div className="w-full text-center text-black flex flex-col justify-center h-full">
                    <div>
                        <h2 className="text-xl font-medium">Iniciar sesión</h2>
                        <p className="text-sm">Ingresa tus datos para iniciar sesión</p>
                        <form action="">
                            <div className="w-full mt-3">
                                <input type="email" placeholder="Email" id="email" name="email" className="w-full p-2 border border-gray-300 rounded-lg" />
                            </div>
                            <div className="w-full mt-3">
                                <input type="password" id="password" name="password" placeholder="Contraseña" className="w-full p-2 border border-gray-300 rounded-lg" />
                            </div>
                            <div className="w-full mt-3">
                                <button className="w-full bg-blue-500 text-white p-2 rounded-lg">Iniciar sesión</button>
                            </div>
                        </form>
                    </div>
                    <div className="my-3 border-t border-gray-300">
                        <p>o</p>
                        <p>Inicia desde</p>
                        <div>
                            <button onClick={() => signIn()}>Google</button>
                        </div>
                    </div>
                    <div className="">
                        <p>¿No tienes cuenta?</p>
                        <a href="#">Registrate</a>
                    </div>
                </div>
            </div>
        </div>
    );
}