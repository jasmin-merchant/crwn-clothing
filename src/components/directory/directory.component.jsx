import React from 'react';

import './directory.styles.scss';

import MenuItem from '../menu-item/menu-item.component';

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [
                {
                    id: '1',
                    title: 'HATS',
                    imageURL: 'https://i.ibb.co/cvpntL1/hats.png',
                },
                {
                    id: '2',
                    title: 'JACKETS',
                    imageURL: 'https://i.ibb.co/px2tCc3/jackets.png',
                },
                {
                    id: '3',
                    title: 'SNEAKERS',
                    imageURL: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                },
                {
                    id: '4',
                    title: 'WOMENS',
                    imageURL: 'https://i.ibb.co/GCCdy8t/womens.png',
                    size: 'large'
                },
                {
                    id: '5',
                    title: 'MENS',
                    imageURL: 'https://i.ibb.co/R70vBrQ/men.png',
                    size: 'large'
                },
            ]
        }
    }

    render() {
        return (
            <div className="directory-menu">
                {
                    this.state.sections.map(({id, title, imageURL, size}) => (
                        <MenuItem key={id} title={title} imageURL={imageURL} size={size} />
                    ))
                }
            </div>
        );
    }
}

export default Directory;