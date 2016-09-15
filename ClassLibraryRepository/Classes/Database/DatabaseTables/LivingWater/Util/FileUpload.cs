using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;

namespace ClassLibraryRepository.Classes.Database.DatabaseTables.LivingWater.Util
{
    public class FileUpload
    {
        public FileUpload() {

        }

        public bool isSuccessUploadImage(string source, string dest)
        {
            try
            {
                System.IO.File.Copy(source, dest);
                return true;
            }
            catch
            {

            }
            return false;
        }

    }

}
