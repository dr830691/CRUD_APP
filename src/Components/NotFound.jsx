import error404 from '../Assets/images/error404.gif';
// import NotFound from './NotFound.css';

const NotFound = ()=>{
    return (
        <>
        <img src={error404} alt="error404"  
        style={{
            display: 'block' ,
            marginLeft: 'auto',
            marginRight:'auto' ,
            marginTop:'100px',
            width: '50%'
  }}/>
       </>
    )
    
}

export default NotFound;