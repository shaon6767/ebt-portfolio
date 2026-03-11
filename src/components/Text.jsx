const Text = () => {
  return (
   <div className="container relative hidden lg:block">
  <div 
    className="absolute" 
    style={{ 
      bottom: '-90px', 
      left: '380px',
      zIndex: 9999 
    }}
  >
    <h1 className="outline-title-two text-red-600 pb-2 text-[130px] font-bold text-center">
      WEB DESIGN
    </h1>
  </div>
</div>
  )
}

export default Text