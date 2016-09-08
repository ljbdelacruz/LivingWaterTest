using System;
namespace ClassLibraryRepository
{
	public class InformationDisplay
	{
		public string title { get; set; }
		public string information { get; set; }
		//put list of image 
		public InformationDisplay() { 
			
		}
		public InformationDisplay(string nTitle, string nInformation)
		{
			this.title = nTitle;
			this.information = nInformation;
		}
	}
}

