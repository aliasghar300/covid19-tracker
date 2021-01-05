import React , {useState , useEffect} from 'react'
import CountryWiseCases from './components/CountryWiseCases';
import Header from './components/Header'
import TotalCases from './components/TotalCases';
import "./App.css";
import Footer from './components/Footer';


export default function CoronaTracker() {


    const url = "https://coronavirus-19-api.herokuapp.com/countries"
    const [loading , setLoading] = useState(true);
    const [data , setData] = useState("");

    const getData = async()=>{
        const responce = await fetch(url)
        const data = await responce.json();
        setData(data);
        setLoading(false);
    }
     useEffect(()=>{
        getData();   
    },[])

if(!loading){
        return (
        <div>
            <Header />
            <br />
            <div>
                <TotalCases data={data} />
                <br />
                <CountryWiseCases data={data} /> 
            </div>
            <br />
            <Footer />
        </div>
    )
}
else{
    return(
        <h1> Loading...</h1>
    )
}
    

};
