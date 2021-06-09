import React from 'react';
import HornedBeasts from './HornedBeasts';
import data from './data.json';
import CardColumns from 'react-bootstrap/CardColumns';


class Main extends React.Component {


    render() {

        return (

            <CardColumns>
                {data.map((animal) => {
                    return (

                        <HornedBeasts
                            title={animal.title}
                            imageUrl={animal.image_url}
                            description={animal.description}
                        />

                    )
                })}
            </CardColumns>


        )
    }
}

export default Main;