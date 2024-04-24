import React, { useEffect, useState } from 'react'
import { SideBar, AddOns, SelectPlan, Summary, YourInfo } from '.'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { sideBarText } from '../constants'
export const Context = React.createContext()
function Container() {
    const navigate = useNavigate()

    useEffect(() => {
        navigate('/')
    }, [])

    let [number, setNumber] = useState(sideBarText[0].index)
    return (
        <Context.Provider value={[number, setNumber]}>
            <div className=' flex sm:flex-row sm:b flex-col sm:justify-center items-center sm:w-[auto] w-[100vw] sm:h-[auto] h-[100vh] rounded-xl sm:gap-[4rem] gap-0 sm:bg-white natural-300--bg p-[1rem]  shadow-lg'>
                <SideBar />
                <div className='relative natural-500--bg sm:w-[auto] w-full rounded-xl flex justify-center items-center'>
                    <Routes>
                        <Route path='/' exeat element={<YourInfo />} />
                        <Route path='/selectPlans' element={<SelectPlan />} />
                        <Route path='/addons' element={<AddOns />} />
                        <Route path='/summary' element={<Summary />} />
                    </Routes>
                </div>

            </div>
        </Context.Provider>
    )
}

export default Container
