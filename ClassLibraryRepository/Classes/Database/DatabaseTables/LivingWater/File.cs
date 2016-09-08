using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ClassLibraryRepository.Classes.Database.DatabaseTables.LivingWater;

namespace ClassLibraryRepository
{
	public class File
	{
		#region 
		public int Id { get; set; }
		public string file { get; set; }
		public string filePath { get; set; }
		public int page_id { get; set; }
		#endregion

		#region constructors
		public File()
		{
			
		}
		public File(int nId, string nFile) {
			this.Id = nId;
			this.file = nFile;
		}
		public File(int nId, string nFile, string nFilePath, int nPage_id) {
			this.Id = nId;
			this.file = nFile;
			this.filePath = nFilePath;
			this.page_id = nPage_id;
		}
		#endregion

	}
}

