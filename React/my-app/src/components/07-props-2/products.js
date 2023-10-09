import React from 'react'
import ProductCard from './product-card'

const Products = () => {
    return (
        <div>
            <ProductCard>
                <h2>Sony Display</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci dolor dicta voluptatibus possimus eveniet ipsam accusamus modi ipsa. Nam consequuntur accusantium sed architecto distinctio, unde iusto eveniet perspiciatis nulla ducimus!</p>
            </ProductCard>
            <ProductCard>
                <h2>Intel Processor</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores eum perferendis sunt qui? Sit vero nulla illum est in soluta dolores consectetur, architecto eaque reprehenderit accusantium eius sed totam nisi?</p>
            </ProductCard>
        </div>
    )
}

export default Products