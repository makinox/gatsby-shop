import React from 'react'
import {SEO} from '../components'
import { Button, Purchase } from '../styles/components'
import { Link } from 'gatsby'

export default function Jumbo() {

    return (
        <div>
            <SEO title="Compra exitosa" />
            <Purchase>
                <h2>Compra cancelada</h2>
                <p>Desafortunadamente algo ocurrio</p>
                <Link to="/">
                    <Button>Volver al catalogo</Button>
                </Link>
            </Purchase>
        </div>
    )
}