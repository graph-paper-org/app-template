<script>
  import { DataGraphic } from "@graph-paper/datagraphic";
  import { Line } from "@graph-paper/elements";
  import { LeftAxis, BottomAxis } from "@graph-paper/guides";

  export let points = 100;

  let y = 100;

  const data = Array.from({ length: points }).map((_, x) => {
    y += (Math.random() - 0.5) * 80;
    return { x, y };
  });
</script>

<DataGraphic>
  <LeftAxis />
  <BottomAxis />
  <Line {data} />
</DataGraphic>
