import React, { Component } from 'react';
import LoginPage from './LoginPage';
import search from './search.png'


class SearchPage extends Component {

    render() {
        return (
            <div>

                <div style={{ "text-align": "center", "marginTop":"60px", "display":"flex","flexDirection":"row","justifyContent":"center"}}>
                

              

                   <input label="Search" placeholder="search the stack" src="search" style ={{"opacity":"5.5px", "height":"25px", "width":"250px", "borderRadius" :"5px"}}>

                


                   </input>
                    {/* <img scr={brain} alt ="BRAIN"></img> */}



                </div>


            </div>


        );

    }
}

export default SearchPage;
