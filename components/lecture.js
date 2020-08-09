export const lecture = () => {
    return (
      <div className='max-w-sm flex my-4 bg-white rounded-lg shadow-xl'>
        <div className='flex-shrink-0'>
          <img className='h-32 w-32 rounded-l-lg' src="https://i.etsystatic.com/10919371/r/il/155a7d/1563938723/il_570xN.1563938723_1rmr.jpg"/>
        </div>
        <div className='flex-col flex-grow'>
          <div className='ml-6 pt-1'>
            <h4 className='text-xl text-gray-900 leading-tight'>COMPSCI335</h4>
            <p className='text-base text-gray-600 leading-normal'>COMPSCI335</p>
          </div>
          <div className='ml-6 mr-1 '>
            {children}
          </div>
        </div>
      </div>
    )
  }
  
  export default lecture
  