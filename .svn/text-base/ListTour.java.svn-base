import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;
import java.util.ListIterator;

/**
 *  @author FIXME
 */
public class ListTour {

    /** Print the items in L on OUTPUT on a line, separated by blanks. */
    static void quickIteratorExamples() {
        ArrayList<String> L = new ArrayList<String>();
        L.add("potato");
        L.add("king");
        L.add("jr.");

        /* This line creates an iterator that points into L */
        ListIterator<String> p1 = L.listIterator();

        /* Since the front item of L is the list is "potato", this
           is the first string that will be returned. The next
           method does two things:
           1. Returns the next item in the list pointed to by
              this iterator.
           2. Advanced the iterator to the next position in the list.
        */
        System.out.println(p1.next());
        System.out.println(p1.next());

        /* After two next calls, the next item would be "jr."
           However, as you'll see below, we call previous instead,
           which returns "king" and also backs up the iterator so
           that it has now gone backwards */

        System.out.println(p1.previous());
        System.out.println(p1.previous());

        /* After the above calls to previous, we're back to the start.
           The next three lines will then move through the entire
           list, and the iterator will stop right after the last
           item */
        System.out.println(p1.next());
        System.out.println(p1.next());
        System.out.println(p1.next());

        /* Since there is nothing after the current position in the
           iterator, the hasNext() call will return False. However,
           there are three things behind the iterator, so
           hasPrevious() will return true. */
        System.out.println(p1.hasNext());
        System.out.println(p1.hasPrevious());

        /* Calling next() with nothing left will cause a null
           pointer exception, as you'll see below. */
        System.out.println(p1.next());

    }


    /** Print the items in L, then print the list backwards (ultimately
      * including the last item twice). You should only create one 
      * iterator. Use for loops for best style. 
      *
      * As an example, suppose the list contains "alfred", "bob"
      * "glorgus", and "stipstip", you should get:
      *
      * alfred bob glorgus stipstip stipstip glorgus bob alfred
      */
    static void printTour(List<String> L) {
        //FIX ME
    }

    /** Quick and dirty main method that calls static methods
        above. ARGS is unused. */
    public static void main(String[] args) {
        /* comment out quickIteratorExamples after you
           understand how it works */
        quickIteratorExamples();

        /* add a call to printTour. You'll need to create
           a list in main to provide to printTour */
    }

}

