<?php

declare(strict_types=1);

namespace App\Image\Model;

use App\Export\ExportAwareInterface;
use App\Image\MIME;

class Image implements ExportAwareInterface
{
    private string $name;
    private string $album;
    private float $contentSize;
    private float $width;
    private float $height;
    private MIME $encodingFormat;

    function __construct() {
        $this->name = '';
        $this->album = '';
        $this->contentSize = 0.0;
        $this->width = 0.0;
        $this->height = 0.0;
        $this->encodingFormat = MIME::UNKNOWN;
    }

    public function getName(): string
    {
        return $this->name;
    }

    public function setName(string $name): void
    {
        $this->name = $name;
    }

    public function getAlbum(): string
    {
        return $this->album;
    }

    public function setAlbum(string $album): void
    {
        $this->album = $album;
    }

    public function getContentSize(): float
    {
        return $this->contentSize;
    }

    public function setContentSize(float $contentSize): void
    {
        $this->contentSize = $contentSize;
    }

    public function getEncodingFormat(): MIME
    {
        return $this->encodingFormat;
    }

    public function setEncodingFormat(MIME $encodingFormat): void
    {
        $this->encodingFormat = $encodingFormat;
    }

    public function getWidth(): float
    {
        return $this->width;
    }

    public function setWidth(float $width): void
    {
        $this->width = $width;
    }

    public function getHeight(): float
    {
        return $this->height;
    }

    public function setHeight(float $height): void
    {
        $this->height = $height;
    }

    public function exportAsArray(): array
    {
        return [
            'name' => $this->name,
            'album' => $this->album,
            'contentSize' => $this->contentSize,
            'width' => $this->width,
            'height' => $this->height,
            'encodingFormat' => $this->encodingFormat,
        ];
    }

    public function exportAsJSON(): string
    {
        return json_encode($this->exportAsArray());
    }

    public function __serialize()
    {
        return $this->exportAsArray();
    }

    public function __unserialize(array $data)
    {
        $this->name = $data['name'];
        $this->album = $data['album'];
        $this->contentSize = $data['contentSize'];
        $this->width = $data['width'];
        $this->height = $data['height'];
        $this->encodingFormat = $data['encodingFormat'];
    }
}
