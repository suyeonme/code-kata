package algorithm.dijkstra;


public class Dijkstra {
    public static void main(String[] args) {

        AdjacentListDijkstra graph = new AdjacentListDijkstra(6);
//        PriorityQueueDijkstra graph = new PriorityQueueDijkstra(6);

        graph.addNode(0, 1, 7);
        graph.addNode(0, 2, 9);
        graph.addNode(0, 5, 14);
        graph.addNode(1, 2, 10);
        graph.addNode(1, 3, 15);
        graph.addNode(2, 3, 11);
        graph.addNode(2, 5, 2);
        graph.addNode(3, 4, 6);
        graph.addNode(4, 5, 9);

        graph.dijkstra(0);
    }
}
