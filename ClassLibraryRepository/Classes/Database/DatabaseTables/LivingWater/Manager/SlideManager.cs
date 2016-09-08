using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ClassLibraryRepository;

namespace ClassLibraryRepository.Classes.Database.DatabaseTables.LivingWater.Manager
{
    public class SlideManager
    {
        public List<Images> images;

        public SlideManager() {
            images = new List<Images>();
            init();
        }
        public void init() {
            images.Add(new Images(1, "/Assets/images/etc/img1.jpg", "", 1, 400, 400));
            images.Add(new Images(2, "/Assets/images/etc/img2.jpg", "", 1, 400, 400));
            images.Add(new Images(3, "/Assets/images/etc/img3.jpg", "", 1, 400, 400));
            images.Add(new Images(4, "/Assets/images/etc/img4.jpg", "", 1, 400, 400));
        }
        public void loadData() {

        }
    }
}
