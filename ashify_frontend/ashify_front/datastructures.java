
import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;
import java.util.TreeSet;

class datastructures {

  public static void main(String[] args) {

    Set<String> districts = new HashSet<String>();

    //Treeset
    //hashset

    districts.addAll(Arrays.asList("Huye", "Huye", "Ruhango", "Kicukiro", "Bugesera", "Nyarugenge", "Huye", "Gasabo",
        "Nyanza", "Huye", "Gasabo", "Bugesera", "Huye", "Musanze", "Nyarugenge", "Muhanga", "Huye", "Nyagatare",
        "Nyarugenge", "Gasabo", "Musanze", "Huye", "Huye", "Gasabo"));
    int i = 1;

    for (String district : districts) {
      System.out.println(i + "." + district);
      i++;
    }
   }


  public static void print(){
    print();

    System.out.println("data structure");
  }

}