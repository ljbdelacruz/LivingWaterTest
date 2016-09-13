﻿using System;
using System.Collections.Generic;
using System.Data;
using ClassLibraryRepository.Classes.Database.DatabaseTables.LivingWater;

namespace ClassLibraryRepository
{
	public class ProductManager
	{
		public List<Products> products;
        public DatabaseHandler dbh;
		public ProductManager()
		{
			products = new List<Products>();
            dbh = new DatabaseHandler();
		}
		public void init() { 
			//this is for dummy data

		}
		public void loadData() {
            //this load the data from database
            dbh.newConnection();
            string sql = "SELECT id, genre from products";
            IDataReader reader = dbh.GetQueryResult(sql);
            while (reader.Read()) {
                DatabaseHandler dbh2 = new DatabaseHandler();
                dbh2.newConnection();
                Products temp=new Products(Convert.ToInt16(reader["id"]), ""+reader["genre"]);
                string sql2 = "SELECT id, item, price, source, stock, product_id FROM productitem WHERE product_id="+reader["id"]+";";
                IDataReader reader2 = dbh2.GetQueryResult(sql2);
                while (reader2.Read()) {
                    temp.appendProductItem(new ProductItem(Convert.ToInt16(reader2["id"]), "" + reader2["item"], Convert.ToDouble(reader2["price"]), 
                                                           "" + reader2["source"], Convert.ToInt16(reader2["stock"]), Convert.ToInt16(reader2["product_id"])));
                }
                this.products.Add(temp);
            }
		}

		#region filters
        /*
		public List<Products> filterByType(int type) {
			List<Products> temp = new List<Products>();
			for (int i = 0; i < this.products.Count; i++) {
				if (this.products[i].numtype == type) {
					temp.Add(this.products[i]);
				}
			}
			return temp;
		}
		//filter by product name
		public List<Products> filterByProductName(string search) {
			List<Products> temp = new List<Products>();
			for (int i = 0; i < this.products.Count; i++) {
				if (this.products[i].productName.Contains(search)) {
					temp.Add(products[i]);
				}
			}
			return temp;
		}
        */
		#endregion
	}
}

