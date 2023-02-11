<script lang="ts">
    import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    CardSubtitle,
    CardText,
    CardTitle,
    Col,
    Row 
    } from 'sveltestrap';
  </script>
  
  <div class="mb-3 d-flex justify-content-between align-items-center">  
    <h2>Dashboard</h2> 
    <div class="">
      <Button color="primary"><h6><b>Buat Pengaduan</b></h6></Button>
    </div>
  </div>
  <Row>
    <Col>
      <Card class="mb-3" color="danger">
        <CardHeader>
          <CardTitle>Ditolak</CardTitle>
        </CardHeader>
        <CardBody>
          <CardSubtitle>Total</CardSubtitle>
          <CardText>
            
          </CardText>
          <Button>Periksa</Button>
        </CardBody>
        <CardFooter>Pengaduan Ditolak</CardFooter>
      </Card>
    </Col>
    <Col>
      <Card class="mb-3" color="warning">
        <CardHeader>
          <CardTitle>Dalam Proses</CardTitle>
        </CardHeader>
        <CardBody>
          <CardSubtitle>Total</CardSubtitle>
          <CardText>
            
          </CardText>
          <Button>Periksa</Button>
        </CardBody>
        <CardFooter>Pengaduan Dalam Proses</CardFooter>
      </Card>
    </Col>
    <Col>
      <Card class="mb-3" color="success">
        <CardHeader>
          <CardTitle>Selesai</CardTitle>
        </CardHeader>
        <CardBody>
          <CardSubtitle>Total</CardSubtitle>
          <CardText>
            
          </CardText>
          <Button>Periksa</Button>
        </CardBody>
        <CardFooter>Pengaduan Selesai</CardFooter>
      </Card>
    </Col>
  </Row>