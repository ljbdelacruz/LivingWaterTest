﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MySql.Data.MySqlClient;
using System.Data;

namespace ClassLibraryRepository
{
	public class DatabaseHandler
	{
		#region properties
        public string connString { get; set; }
        private Database db;
		#endregion
		public DatabaseHandler(){
            db = new Database("MYSQL5014.SmarterASP.NET", "a0c65d_lw", "johnny05", "db_a0c65d_lw");
        }
        public IDataReader GetQueryResult(string sql)
        {
            return db.GetQueryResult(sql);
        }
        public void ExecuteNonQuery(string sql)
        {
            db.ExecuteNonQuery(sql);
        }
        public string MD5Equivalent(string data) {
            string sql = "SELECT MD5('"+data+"') AS result";
            IDataReader reader = db.GetQueryResult(sql);
            while(reader.Read()){
                return (string)reader["result"];
            }
            return "";
        }

        #region connections
        public void OpenConnection()
        {
            db.OpenConnection();
        }
        public void CloseConnection()
        {
            db.CloseConnection();
        }
        public void newConnection()
        {
            db.CloseConnection();
            db.OpenConnection();
        }
        #endregion

        //create a method that will execute a query
        //create a method that will execute non query
        //create a method that will return a datatable

    }
}

