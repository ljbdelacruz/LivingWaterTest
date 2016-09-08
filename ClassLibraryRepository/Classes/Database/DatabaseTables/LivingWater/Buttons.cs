using System;
namespace ClassLibraryRepository
{
	public class Buttons
	{
		public int Id { get; set; }
		public string name { get; set; }
		public string link { get; set; }

		public Buttons()
		{
		}
		public Buttons(int nId, string nName, string nLink) {
			this.Id = nId;
			this.name = nName;
			this.link = nLink;
		}
	}
}

