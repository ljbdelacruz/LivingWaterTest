using System;
using ClassLibraryRepository;

namespace ClassLibraryRepository
{
	public class StoreSettings
	{
		public int id { get; set; }
		public int store_id { get; set; }
		public Images backgroundpath;
		public int status { get; set; }
		public string statusString { get; set; }
		public int template { get; set; }

		public StoreSettings() { 
			
		}
		public StoreSettings(int nId, int nStore_id, Images nBackgroundpath, int nStatus, string nStatusString, int nTemplate)
		{
			this.id = nId;
			this.store_id = nStore_id;
			this.backgroundpath = nBackgroundpath;
			this.status = nStatus;
			this.statusString = nStatusString;
			this.template = nTemplate;
		}
	}
}

