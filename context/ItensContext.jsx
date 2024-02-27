import React, { createContext, useContext, useEffect, useState } from 'react'
import { Dimensions } from 'react-native'

const ItensContext = createContext()

export const ItensProvider = ({ children }) => {
  const [itens, setItens] = useState([
    // {
    //   porcent: 50,
    //   nome: 'corrida',
    //   i: 0,
    //   meta: 75,
    //   days: 28,
    //   color: ['#996633', 'rgba(153, 102, 51, 0.5)'],
    // },
    // {
    //   porcent: 90,
    //   nome: 'leitura',
    //   i: 1,
    //   meta: 90,
    //   days: 28,
    //   color: ['#007FFF', 'rgba(0, 127, 255, 0.5)'],
    // },
    // {
    //   porcent: 20,
    //   nome: 'banho gelado',
    //   i: 2,
    //   meta: 30,
    //   days: 30,
    //   color: ['#DC143C', 'rgba(220, 20, 60, 0.5)'],
    // },
    // {
    //   porcent: 60,
    //   nome: 'gym',
    //   i: 3,
    //   meta: 100,
    //   days: 99,
    //   color: ['#6600cc', 'rgba(102, 0, 204, 0.5)'],
    // },
  ])

  const [screenWidth, setScreenWidth] = useState(Dimensions.get('window').width)

  useEffect(() => {
    const updateScreenWidth = () => {
      setScreenWidth(Dimensions.get('window').width)
    }

    // Adiciona um listener para detectar mudanças no tamanho da tela
    Dimensions.addEventListener('change', updateScreenWidth)
  }, [])

  const [status, setStatus] = useState(['add'])

  // console.log(itens);
  return (
    <ItensContext.Provider
      value={{
        itens,
        setItens,
        status,
        setStatus,
        screenWidth,
        setScreenWidth,
      }}
    >
      {children}
    </ItensContext.Provider>
  )
}

export const useItens = () => {
  const context = useContext(ItensContext)
  if (!context) {
    throw new Error('useItens must be used within an ItensProvider')
  }
  return context
}
