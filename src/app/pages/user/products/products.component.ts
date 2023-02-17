import { Component,OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products:any;
  cart:any;

  constructor(private productService:ProductService){}


  ngOnInit(): void {
    this.productService.getProducts().subscribe((response:any)=>{

      this.products=response.products;
      this.cart=response.cart;
      console.log(response);
    })
  }

    checkInCart(product:any)
    {
      let cp=this.cart.find((p:any)=>{
        return p.pivot.user_id==1 && p.pivot.product_id===product.id;
      })

      if(cp===undefined)
      {
        return false;
      }

      return true;



    }


    addToCart(product:any)
    {
        let item={
          user_id:1,
          product_id:product.id,
          amount:product.price
        }

        this.productService.addToCart(item).subscribe((response:any)=>{
          console.log(response);
          if(response.success===true)
          {
            this.cart=response.cart;
          }
        })


    }


    removeFromCart(productid:any)
    {
      this.productService.removeFromCart(1,productid).subscribe((response:any)=>{
        if(response.success===true)
        {
          this.cart=response.cart;
        }
      })
    }


  

  


}
