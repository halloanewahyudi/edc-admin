export const useForsidebar = () => {
   const openSidebar = useState('openSidebar', () => false)


  const toggleSidebar = () => {
    openSidebar.value = !openSidebar.value
    console.log(openSidebar.value)
  }

  const setSidebar = (value: boolean) => {
    openSidebar.value = value
  }
  return {
    openSidebar,
    toggleSidebar,
    setSidebar
  }
}
