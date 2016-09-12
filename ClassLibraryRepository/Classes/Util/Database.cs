using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MySql.Data.MySqlClient;
using System.Data;
using System.Diagnostics;

namespace ClassLibraryRepository
{
	public class Database
	{
		private string connectionString { get; set; }
		private IDbConnection dbcon;
		private IDbCommand dbcmd;
		public Database(string nServer, string nUsername, string nPassword, string nDatabase) {
			this.connectionString = "Server=" + nServer + ";" +
									"Database=" + nDatabase + ";" +
									"User=" + nUsername + ";" +
									"Password=" + nPassword + ";" +
									"Pooling=false;";
			dbcon = new MySqlConnection(this.connectionString);
			dbcon.Open();
			dbcmd = dbcon.CreateCommand();
		}
        public void OpenConnection() {
            this.dbcon.Open();
        }
		public IDataReader GetQueryResult(string sql)
		{
            try
            {
                dbcmd.CommandText = sql;
                IDataReader reader = dbcmd.ExecuteReader();
                return reader;
            }
            catch{
                Debug.WriteLine("Error When Executing this query " + sql);
            }
            return null;
		}
		public void ExecuteNonQuery(string sql) {
			dbcmd.CommandText = sql;
			dbcmd.ExecuteNonQuery();
		}
		public void CloseConnection() {
			dbcon.Close();
		}
	}
}

