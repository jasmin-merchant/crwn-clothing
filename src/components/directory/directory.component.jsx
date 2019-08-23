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
                    linkURL: 'hats',
                },
                {
                    id: '2',
                    title: 'JACKETS',
                    imageURL: 'https://i.ibb.co/px2tCc3/jackets.png',
                    linkURL: 'hats',
                },
                {
                    id: '3',
                    title: 'SNEAKERS',
                    imageURL: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                    linkURL: '',
                },
                {
                    id: '4',
                    title: 'WOMENS',
                    imageURL: 'https://i.ibb.co/GCCdy8t/womens.png',
                    size: 'large',
                    linkURL: '',
                },
                {
                    id: '5',
                    title: 'MENS',
                    imageURL: 'https://i.ibb.co/R70vBrQ/men.png',
                    size: 'large',
                    linkURL: '',
                },
            ]
        }
    }

    render() {
        return (
            <div className="directory-menu">
                {
                    this.state.sections.map(({id, ...otherSectionProps}) => (
                        <MenuItem key={id} {...otherSectionProps} />
                    ))
                }
            </div>
        );
    }
}

export default Directory;