import React from 'react'
import { StyledJumbo } from '../styles/components'
import { Image } from './'

export default function Jumbo({description}) {

    return (
        <div>
            <StyledJumbo>
                <div>
                    <h2>Consige el mejor swag exclusivo y expecial de platzi</h2>
                    <small>{description}</small>
                </div>
                <Image name="icon" />
            </StyledJumbo>
        </div>
    )
}