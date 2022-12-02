
const Footer = () => {
    const today = new Date();
  return (
    
        <footer className=" bg-black">
                <p>
                    Copyright &copy; {today.getFullYear()}
                </p>
        </footer>  

  )
}
export default Footer