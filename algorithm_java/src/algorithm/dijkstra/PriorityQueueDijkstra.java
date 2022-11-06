package algorithm.dijkstra;

import java.util.PriorityQueue;

class PriorityQueueDijkstra {
    private int n;           // 노드들의 수
    private int matrix[][];    // 노드들간의 가중치

    public PriorityQueueDijkstra(int n) {
        this.n = n;
        matrix = new int[n][n];

        // 인접행렬을 무한대로 초기화
        for (int i = 0; i < n; ++i) {
            for (int j = 0; j < n; ++j) {
                matrix[i][j] = Integer.MAX_VALUE;
            }
        }
    }

    class Node implements Comparable<Node> {
        private int weight;
        private int index;

        public Node(int weight, int index) {
            this.weight = weight;
            this.index = index;
        }

        @Override
        public int compareTo(Node node) {
            // 우선순위 큐의 기준을 가중치로 제공
            return Integer.compare(this.weight, node.weight);
        }
    }

    public void addNode(int v1, int v2, int weight) {
        matrix[v1][v2] = weight;
        matrix[v2][v1] = weight;
    }

    public void dijkstra(int v) {
        PriorityQueue<Node> queue = new PriorityQueue<>();     // 노드까지의 거리를 저장할 우선순위 큐
        int distance[] = new int[n];          // 최단 거리를 저장
        boolean[] visited = new boolean[n];      // 해당 노드 방문 여부 저장

        // 최단 거리 초기화
        for (int i = 0; i < n; ++i) {
            distance[i] = Integer.MAX_VALUE;
        }

        // 시작노드 값 초기화
        queue.add(new Node(v, 0));
        distance[v] = 0;
        visited[v] = true;

        // 인접 노드의 최단 거리 갱신
        for (int i = 0; i < n; ++i) {
            if (!visited[i] && matrix[v][i] != Integer.MAX_VALUE) {
                distance[i] = matrix[v][i];
                queue.add(new Node(matrix[v][i], i));
            }
        }

        while (!queue.isEmpty()) {
            int min_index = -1;

            // 노드 최소값을 꺼냄
            Node node = queue.poll();
            min_index = node.index;
            visited[min_index] = true;

            // 노드 최소값 탐색
            for (int i = 0; i < n; ++i) {
                if (!visited[i] && matrix[min_index][i] != Integer.MAX_VALUE) {
                    if (distance[min_index] + matrix[min_index][i] < distance[i]) {
                        distance[i] = distance[min_index] + matrix[min_index][i];
                        queue.add(new Node(distance[i], i));
                    }
                }
            }

            // 결과값 출력
            for (int i = 0; i < n; ++i) {
                if (distance[i] == 2147483647) {
                    System.out.print("∞ ");
                } else {
                    System.out.print(distance[i] + " ");
                }
            }
            System.out.println("");
        }
    }
}