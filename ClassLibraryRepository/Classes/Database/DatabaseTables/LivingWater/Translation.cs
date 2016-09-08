using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ClassLibraryRepository.Classes.Database.DatabaseTables.LivingWater
{
    public class Translation
    {
        public int langID { get; set; }
        public string translation { get; set; }
        public Translation() {

        }
        public Translation(int nLangID, string nTranslation) {
            this.langID = nLangID;
            this.translation = nTranslation;
        }
        
    }
}
