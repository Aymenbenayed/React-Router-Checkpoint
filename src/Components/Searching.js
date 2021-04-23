import { AutoComplete } from 'antd'
import React, {useState} from 'react'
import {Input} from 'antd';

const Searching = ({setSearchTerm}) => {
    

    return (
        <div>
            <AutoComplete>
                <Input.Search size="large" placeholder="Search" 
                onChange={(e) => setSearchTerm(e.target.value)}/>
                </AutoComplete>
            
        </div>
    )
}

export default Searching
